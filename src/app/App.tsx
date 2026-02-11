import React, { useState, useRef, useEffect } from "react";
import { Layout } from "./components/Layout";
import { BottomNav } from "./components/BottomNav";
import { LibraryView } from "./views/LibraryView";
import { SearchView } from "./views/SearchView";
import { MenuView } from "./views/MenuView";
import { ShelfView } from "./views/ShelfView";
import { TagsView } from "./views/TagsView";

type View = 'search' | 'library' | 'menu' | 'shelf' | 'timeline';

export default function App() {
  const [activeTab, setActiveTab] = useState<View>('library');
  const [scrollToGoodreads, setScrollToGoodreads] = useState(false);
  const [scrollToConnect, setScrollToConnect] = useState(false);
  const [menuInitialSubView, setMenuInitialSubView] = useState<'menu' | 'accounts' | 'friends' | 'bookclubs' | 'shared_reads'>('menu');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when switching views, unless we're specifically scrolling to a section
  useEffect(() => {
    if (scrollContainerRef.current && !scrollToConnect && !scrollToGoodreads) {
      scrollContainerRef.current.scrollTop = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, menuInitialSubView]);

  const handleTabChange = (tab: View) => {
    setActiveTab(tab);
    if (tab !== 'menu') {
        setScrollToGoodreads(false);
        setMenuInitialSubView('menu'); // Reset menu view when navigating away
    }
    if (tab !== 'library') {
      setScrollToConnect(false);
    }
  };

  const handleSyncGoodreads = () => {
      setActiveTab('menu');
      setScrollToGoodreads(true);
      setMenuInitialSubView('menu');
      setScrollToConnect(false);
  };

  const handleOpenBookClubs = () => {
      setActiveTab('menu');
      setMenuInitialSubView('bookclubs');
      setScrollToConnect(false);
  };

  const handleOpenAccounts = () => {
      setActiveTab('menu');
      setMenuInitialSubView('accounts');
      setScrollToConnect(false);
  };

  const handleOpenFriends = () => {
      setActiveTab('menu');
      setMenuInitialSubView('friends');
      setScrollToConnect(false);
  };

  const handleOpenSharedReads = () => {
      setActiveTab('menu');
      setMenuInitialSubView('shared_reads');
      setScrollToConnect(false);
  };

  const handleBackToConnect = () => {
      setActiveTab('library');
      setMenuInitialSubView('menu');
      setScrollToConnect(true);
      // Reset after a short delay to allow scrolling to happen again if needed
      setTimeout(() => setScrollToConnect(false), 1000);
  };

  return (
    <Layout>
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto no-scrollbar pb-0 relative bg-black"
      >
        {activeTab === 'library' && (
            <LibraryView 
                onSyncGoodreads={handleSyncGoodreads} 
                onOpenBookClubs={handleOpenBookClubs}
                onOpenAccounts={handleOpenAccounts}
                onOpenFriends={handleOpenFriends}
                onOpenSharedReads={handleOpenSharedReads}
                scrollToConnect={scrollToConnect}
            />
        )}
        {activeTab === 'search' && <SearchView onNavigateToShelf={() => setActiveTab('shelf')} />}
        {activeTab === 'menu' && (
            <MenuView 
                scrollToGoodreads={scrollToGoodreads} 
                initialSubView={menuInitialSubView}
                onNavigateToLibrary={handleBackToConnect}
            />
        )}
        {activeTab === 'shelf' && <ShelfView onGoHome={() => setActiveTab('library')} />}
        {activeTab === 'timeline' && <TagsView />}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </Layout>
  );
}
