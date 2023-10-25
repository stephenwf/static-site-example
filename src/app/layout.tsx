import "./globals.css";
import { Inter } from "next/font/google";
import { BlockEditor } from "@/blocks/block-editor.lazy";
import { Provider } from "@/app/provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Static site",
  description: "",
};

if (process.env.NODE_ENV !== "production") {
  // @ts-expect-error typescript can't resolve CSS
  import("@page-blocks/react-editor/dist/index.css");
  // @ts-expect-error typescript can't resolve CSS
  import("@page-blocks/react/dist/index.css");
  // @ts-expect-error typescript can't resolve CSS
  import("@page-blocks/web-components/dist/index.css");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-[1440px] mx-auto bg-white min-h-full px-8">
          <Provider>
            {children}
            {process.env.NODE_ENV !== "production" ? (
              <BlockEditor showToggle rsc />
            ) : null}
          </Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
