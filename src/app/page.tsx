"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
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
            { name: "À Propos", id: "/#about" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Commencer", href: "/contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Nous Créons des Expériences Digitales"
          description="Transformez votre marque avec un design et un développement web de pointe. Nous créons des sites web époustouflants qui transforment les visiteurs en clients."
          tag="Agence primée"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Démarrer un Projet", href: "/contact" },
            { text: "Voir Nos Projets", href: "/#work" }
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "Design UI UX - Application Vie Quotidienne" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp?_wi=1", imageAlt: "Design UI UX - Plateforme SaaS" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Design UI UX - Lumine Soins de la Peau" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp", imageAlt: "Design UI UX - Cours en Ligne" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-9.webp", imageAlt: "Design UI UX - Coach d'Affaires" }
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Design UI UX - Luxuria Voyages de Luxe" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "Design UI UX - Clinique Dentaire" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "Design UI UX - Constructeur de Produits IA" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "Design UI UX - Automatisation IA" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Nos Services"
          description="Nous offrons une gamme complète de services numériques pour aider votre marque à se démarquer en ligne."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Tous les Services", href: "/#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Référencement (SEO)",              description: "Nous optimisons votre site web pour qu'il soit mieux classé dans les moteurs de recherche et génère du trafic organique.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Mots-clés", "Backlinks", "Balises Méta", "Trafic Organique", "Classement", "Analyses", "SERP", "Indexation"]
            },
            {
              title: "Développement Web",              description: "Des sites web personnalisés, rapides, réactifs et conçus pour convertir.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "Projet Web - Plateforme AgentFlow IA" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Projet Web - Studio d'Architecture" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Projet Web - Toiture Summit" }
              ]
            },
            {
              title: "Image de Marque",              description: "Créez une identité de marque mémorable qui résonne avec votre public.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=2", imageAlt: "Projet d'Image de Marque 1" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=2", imageAlt: "Projet d'Image de Marque 2" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp?_wi=2", imageAlt: "Projet d'Image de Marque 3" }
              ]
            }
          ]}
        />
        <FeatureCardTwentySix
          title="Nos Projets"
          description="Une sélection de projets que nous avons réalisés pour des clients de divers secteurs."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Voir Tous les Projets", href: "/#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Soins de la Peau Umbra",              description: "Commerce électronique de parfums de luxe",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp",              imageAlt: "Site Web Umbra Soins de la Peau",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Luxuria Voyages",              description: "Expériences de voyages de luxe sur mesure",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",              imageAlt: "Site Web Luxuria Voyages",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Soins Dentaires",              description: "Cabinet dentaire de premier ordre",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",              imageAlt: "Site Web Soins Dentaires de Luxe",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Toiture Summit",              description: "Services de toiture professionnels",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp",              imageAlt: "Site Web Toiture Summit",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Immobilier Dubaï",              description: "Annonces de propriétés de luxe",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-5.webp",              imageAlt: "Site Web Immobilier Dubaï",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            }
          ]}
        />
        <FeatureBento
          title="Notre Promesse"
          description="Nous livrons des résultats qui parlent d'eux-mêmes."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Optimisé pour Tous les Appareils",              description: "Des sites web au pixel près qui s'affichent parfaitement sur toutes les tailles d'écran et tous les appareils.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Vérification responsive",              alertMessage: "Tous les points de rupture validés",              apps: [
                { name: "Téléphone", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Livres", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Caméra", icon: Camera },
                { name: "Musique", icon: Music },
                { name: "Paramètres", icon: Settings },
                { name: "Chat", icon: MessageCircle }
              ]
            },
            {
              title: "Hébergement Sécurisé",              description: "Sécurité de niveau entreprise et disponibilité de 99,9 % pour votre site web.",              bentoComponent: "reveal-icon",              icon: Shield
            },
            {
              title: "Délais Rapides",              description: "Du concept au lancement en un temps record sans sacrifier la qualité.",              bentoComponent: "timeline",              heading: "Lancement du Projet",              subheading: "Semaine 1",              items: [
                { label: "Découverte & maquettes", detail: "Jours 1-3" },
                { label: "Design & développement", detail: "Jours 4-10" },
                { label: "Tests & déploiement", detail: "Jours 11-14" }
              ],
              completedLabel: "En Ligne"
            },
            {
              title: "Intégrations Fluides",              description: "Connectez-vous aux outils que vous utilisez déjà — CRM, analyses, paiements, et plus encore.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp }
              ]
            },
            {
              title: "Tendances de Croissance",              description: "Des informations basées sur les données pour optimiser votre présence de recherche et générer du trafic.",              bentoComponent: "line-chart"
            }
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Webuild a complètement transformé notre présence en ligne. L'équipe a livré un site web époustouflant qui a dépassé nos attentes et a doublé notre taux de conversion."
          rating={5}
          author="— Maria Santos, PDG de Luxuria Voyages"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", alt: "Client" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Reconnu par les Leaders de l'Industrie"
          description="Des années d'expérience dans la création de produits numériques qui génèrent de vrais résultats."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "100+", title: "Projets", description: "Livrés avec succès dans tous les secteurs", icon: Award },
            { id: "satisfaction", value: "99%", title: "Satisfaction", description: "Taux de satisfaction client et en croissance", icon: Users },
            { id: "years", value: "8+", title: "Années", description: "À créer des expériences numériques exceptionnelles", icon: TrendingUp }
          ]}
        />
        <FeatureCardSixteen
          title="Pourquoi Choisir Webild"
          description="Voyez la différence qu'une agence web professionnelle peut faire."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Modèles génériques sans personnalité",              "Temps de chargement lents et performances médiocres",              "Aucune stratégie SEO ou visibilité de recherche",              "Design dépassé qui nuit à la crédibilité",              "Aucun support continu après le lancement"
            ]
          }}
          positiveCard={{
            items: [
              "Designs personnalisés adaptés à votre marque",              "Performances ultra-rapides sur tous les appareils",              "SEO intégré pour générer du trafic organique",              "Design moderne qui inspire confiance",              "Support et maintenance dédiés"
            ]
          }}
        />
        <TeamCardFive
          title="Rencontrez l'Équipe"
          description="Les esprits créatifs derrière votre prochain projet."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Sarah Miller", role: "Développeuse Principale", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", imageAlt: "Sarah Miller" },
            { id: "2", name: "Valentina Reyes", role: "Directrice Artistique", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp", imageAlt: "Valentina Reyes" },
            { id: "3", name: "Carlos Mendoza", role: "Designer UX", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp", imageAlt: "Carlos Mendoza" }
          ]}
        />
        <FaqBase
          title="Foire Aux Questions"
          description="Tout ce que vous devez savoir sur notre collaboration."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Combien de temps dure un projet typique ?", content: "La plupart des projets sont achevés en 2 à 4 semaines, selon leur portée et leur complexité. Nous vous fournirons un calendrier détaillé lors de notre consultation initiale." },
            { id: "2", title: "Quelle est votre structure tarifaire ?", content: "Nous proposons une tarification basée sur les projets, adaptée à vos besoins. Chaque projet comprend le design, le développement, l'optimisation SEO et le support après le lancement." },
            { id: "3", title: "Offrez-vous une maintenance continue ?", content: "Oui ! Nous proposons des forfaits de support et de maintenance continus pour maintenir votre site web à jour, sécurisé et performant." },
            { id: "4", title: "Pouvez-vous refaire le design de mon site web existant ?", content: "Absolument. Nous sommes spécialisés dans les refontes de sites web qui modernisent votre marque tout en préservant votre contenu existant et votre classement SEO." },
            { id: "5", title: "Quelles technologies utilisez-vous ?", content: "Nous construisons avec des technologies modernes, notamment Next.js, React et Tailwind CSS, pour garantir des sites web rapides, évolutifs et maintenables."
            }
          ]}
        />
        <ContactCTA
          tag="Contactez-Nous"
          title="Prêt à Transformer Votre Présence Digitale ?"
          description="Construisons quelque chose d'extraordinaire ensemble. Contactez-nous et discutons de votre prochain projet."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Démarrer Votre Projet", href: "/contact" },
            { text: "Voir Nos Projets", href: "/#work" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Webmotion"
          copyrightText="© 2026 Webmotion. Tous droits réservés."
          columns={[
            {
              title: "Entreprise",              items: [
                { label: "À Propos", href: "/#about" },
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
