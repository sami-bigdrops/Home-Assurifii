import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Assurifii - Home Insurance Quotes",
  description: "Get in touch with Assurifii for questions about our home insurance services. Contact us via email, phone, or our contact form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-auto">
      {children}
    </div>
  );
}
