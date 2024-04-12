import { HomepageSearch } from "@/components/homepage-search";

import { ThemeCard } from "@/components/theme-card";
import { FourGrid } from "@/components/four-grid";
import { NewsCard } from "@/components/news-card";
import { Slot } from "@/blocks/slot";
import { CollectionSnippet } from "@/components/collection-snippet";
import { LargeCollectionSnippet } from "@/components/large-collection-snippet";
import { CollectionPageFeature } from "@/components/collection-page-feature";
import { ManifestCard } from "@/components/manifest-card";
import { ManifestViewer } from "@/components/manifest-viewer";

export default function Home() {
  return (
    <>
      <HomepageSearch />
      <Slot name="homepage" context={{}} />

      <FourGrid title="Explore by theme" columns={4}>
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
      </FourGrid>

      <FourGrid title="Latest stories" columns={3}>
        <NewsCard
          link="#"
          label="How to use the new design system"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          thumbnail="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tag="News"
        />
        <NewsCard
          link="#"
          label="How to use the new design system"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          thumbnail="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tag="News"
        />
        <NewsCard
          link="#"
          label="How to use the new design system"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          thumbnail="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tag="News"
        />
      </FourGrid>

      <CollectionPageFeature />

      <CollectionSnippet />

      <FourGrid columns={2}>
        <LargeCollectionSnippet />
        <LargeCollectionSnippet />
        <LargeCollectionSnippet />
        <LargeCollectionSnippet />
      </FourGrid>

      <FourGrid columns={4}>
        <ManifestCard
          label="The manifest label"
          description="A description"
          thumbnail="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
          link="#"
        />
        <ManifestCard
          label="The manifest label"
          description="A description"
          thumbnail="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
          link="#"
        />
        <ManifestCard
          label="The manifest label"
          description="A description"
          thumbnail="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
          link="#"
        />
        <ManifestCard
          label="The manifest label"
          description="A description"
          thumbnail="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
          link="#"
        />
      </FourGrid>
    </>
  );
}
