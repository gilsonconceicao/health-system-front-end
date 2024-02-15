'use client'
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react';
import "./globals.css";
import Base from "@/Components/Base/Base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Base>{children}</Base>
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
