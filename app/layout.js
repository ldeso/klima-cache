export const config = {
  unstable_runtimeJS: false,
};

export const metadata = {
  title: "Klima Cache",
  robots: {
    index: false,
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
