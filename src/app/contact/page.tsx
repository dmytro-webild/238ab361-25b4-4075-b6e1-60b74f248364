"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webmotion"
          logoAlt="Logo Webmotion"
          navItems={[
            { name: "Projets", id: "/#work" },
            { name: "Services", id: "/#services" },
            { name: "À Propos", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Commencer", href: "/contact" }}
        />
        <div id="contact" data-section="contact">
          <ContactText
            text="Prêt à transformer votre présence digitale ? Contactez-nous et discutons de votre prochain projet."
            buttons={[
              { text: "Envoyer un Message", href: "mailto:info@webmotion.com" }
            ]}
            background={{ variant: "rotated-rays-animated" }}
            useInvertedBackground={false}
          />
        </div>
        <FooterBase
          logoText="Webmotion"
          copyrightText="© 2026 Webmotion. Tous droits réservés."
          columns={[
            {
              title: "Entreprise",              items: [
                { label: "À Propos", href: "/about" },
                { label: "Services", href: "/#services" },
                { label: "Projets", href: "/#work" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Développement Web", href: "/#services" },
                { label: "Référencement (SEO)", href: "/#services" },
                { label: "Image de Marque", href: "/#services" },
                { label: "Design UI/UX", href: "/#services" }
              ]
            },
            {
              title: "Connecter",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" }
              ]
            }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}