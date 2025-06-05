'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Hero Section
    'hero.badge': 'AI-Powered Startup Intelligence',
    'hero.title.part1': 'Founder',
    'hero.title.part2': 'Is',
    'hero.words.innovate': 'Innovate',
    'hero.words.create': 'Create',
    'hero.words.validate': 'Validate',
    'hero.words.launch': 'Launch',
    'hero.words.scale': 'Scale',
    'hero.description': 'Your AI-powered thinking partner that guides you from',
    'hero.description.highlight': ' initial spark to market success',
    'hero.description.end': ' — offering strategic insights, validation frameworks, and emotional support every step of the way.',
    'hero.button.start': 'Start Building',
    'hero.button.demo': 'Watch Demo',
    'hero.stats.features': 'AI Features',
    'hero.stats.success': 'Success Rate',
    'hero.stats.support': 'Strategic Support',

    // Benefits Section
    'benefits.badge': 'Why Choose FounderIs',
    'benefits.title': 'Your complete startup',
    'benefits.title.highlight': 'support ecosystem',
    'benefits.description': 'From initial brainstorming to market validation, strategic planning to emotional resilience — FounderIs provides the comprehensive guidance solo founders need to succeed.',
    'benefits.vision.title': 'Vision Partner',
    'benefits.vision.description': 'Interactive brainstorming sessions that help refine your ideas, explore untapped opportunities, and crystallize your core value proposition.',
    'benefits.market.title': 'Market Compass',
    'benefits.market.description': 'Guided validation frameworks and hypothesis testing to ensure product-market fit before you invest time and resources.',
    'benefits.strategic.title': 'Strategic Planner',
    'benefits.strategic.description': 'Structured business planning, financial projections, and actionable roadmaps that keep you focused on what matters most.',
    'benefits.decision.title': 'Decision Lab',
    'benefits.decision.description': 'Scenario simulations and pre-mortem analysis that help you anticipate challenges and make informed strategic choices.',
    'benefits.execution.title': 'Execution Optimizer',
    'benefits.execution.description': 'Communication assistance, productivity insights, and bottleneck identification to maximize your efficiency and impact.',
    'benefits.emotional.title': 'Emotional Anchor',
    'benefits.emotional.description': '24/7 confidential support space offering motivation, stress management, and resilience building for the founder journey.',
    'benefits.button': 'Experience the Power',

    // How It Works Section
    'howworks.badge': 'How It Works',
    'howworks.title': 'Your journey from',
    'howworks.title.highlight': 'spark to success',
    'howworks.description': 'Three core pillars of support that provide comprehensive guidance, validation insights, and emotional resilience for solo founders.',
    'howworks.step1.title': 'Thinking Partnership',
    'howworks.step1.description': 'Engage in interactive brainstorming sessions to clarify your vision, refine your value proposition, and develop strategic plans.',
    'howworks.step1.detail1': 'Interactive idea refinement',
    'howworks.step1.detail2': 'Value proposition development',
    'howworks.step1.detail3': 'Strategic planning assistance',
    'howworks.step1.detail4': 'Communication and pitch support',
    'howworks.step2.title': 'Validation Framework',
    'howworks.step2.description': 'Design and execute market validation experiments with AI-guided research to prove product-market fit.',
    'howworks.step2.detail1': 'Hypothesis testing design',
    'howworks.step2.detail2': 'Market research guidance',
    'howworks.step2.detail3': 'Customer feedback analysis',
    'howworks.step2.detail4': 'Demand assessment tools',
    'howworks.step3.title': 'Continuous Support',
    'howworks.step3.description': 'Access ongoing emotional support, productivity optimization, and strategic guidance throughout your founder journey.',
    'howworks.step3.detail1': 'Confidential emotional support',
    'howworks.step3.detail2': 'Productivity and focus coaching',
    'howworks.step3.detail3': 'Stress management techniques',
    'howworks.step3.detail4': 'Motivational reinforcement',
    'howworks.button': 'Start Your Journey',
    'howworks.subtitle': 'Join solo founders who no longer journey alone',

    // Footer Section
    'footer.badge': 'Ready to Transform?',
    'footer.title': 'Ready to transform your',
    'footer.title.highlight': 'founder journey?',
    'footer.description': 'Join solo founders who no longer navigate uncertainty alone. Get the strategic thinking partner, validation framework, and emotional support you need to succeed.',
    'footer.button.start': 'Start Building Today',
    'footer.button.demo': 'Schedule a Demo',
    'footer.brand.description': 'Your AI-powered thinking partner providing strategic guidance, validation frameworks, and emotional support for solo founders.',
    'footer.platform': 'Platform',
    'footer.company': 'Company',
    'footer.copyright': '© 2024 FounderIs. All rights reserved.',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.stories': 'Success Stories',
    'footer.documentation': 'Documentation',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy'
  },
  es: {
    // Hero Section
    'hero.badge': 'Inteligencia Startup Potenciada por IA',
    'hero.title.part1': 'Founder',
    'hero.title.part2': 'Is',
    'hero.words.innovate': 'Innova',
    'hero.words.create': 'Crea',
    'hero.words.validate': 'Valida',
    'hero.words.launch': 'Lanza',
    'hero.words.scale': 'Escala',
    'hero.description': 'Tu compañero inteligente potenciado por IA que te guía desde',
    'hero.description.highlight': ' la chispa inicial hasta el éxito del mercado',
    'hero.description.end': ' — ofreciendo insights estratégicos, marcos de validación y apoyo emocional en cada paso del camino.',
    'hero.button.start': 'Comienza gratis',
    'hero.button.demo': 'Ver demo',
    'hero.stats.features': 'Funciones IA',
    'hero.stats.success': 'Tasa de Éxito',
    'hero.stats.support': 'Soporte Estratégico',

    // Benefits Section
    'benefits.badge': 'Por qué elegir FounderIs',
    'benefits.title': 'Tu ecosistema completo de',
    'benefits.title.highlight': 'soporte para startups',
    'benefits.description': 'Desde lluvia de ideas inicial hasta validación de mercado, planificación estratégica hasta resistencia emocional — FounderIs proporciona la guía integral que los fundadores solitarios necesitan para tener éxito.',
    'benefits.vision.title': 'Socio de Visión',
    'benefits.vision.description': 'Sesiones interactivas de lluvia de ideas que ayudan a refinar tus ideas, explorar oportunidades inexploradas y cristalizar tu propuesta de valor central.',
    'benefits.market.title': 'Brújula de Mercado',
    'benefits.market.description': 'Marcos de validación guiada y pruebas de hipótesis para asegurar el ajuste producto-mercado antes de invertir tiempo y recursos.',
    'benefits.strategic.title': 'Planificador Estratégico',
    'benefits.strategic.description': 'Planificación empresarial estructurada, proyecciones financieras y hojas de ruta accionables que te mantienen enfocado en lo que más importa.',
    'benefits.decision.title': 'Laboratorio de Decisiones',
    'benefits.decision.description': 'Simulaciones de escenarios y análisis pre-mortem que te ayudan a anticipar desafíos y tomar decisiones estratégicas informadas.',
    'benefits.execution.title': 'Optimizador de Ejecución',
    'benefits.execution.description': 'Asistencia en comunicación, insights de productividad e identificación de cuellos de botella para maximizar tu eficiencia e impacto.',
    'benefits.emotional.title': 'Ancla Emocional',
    'benefits.emotional.description': 'Espacio de apoyo confidencial 24/7 que ofrece motivación, manejo del estrés y construcción de resistencia para el viaje del fundador.',
    'benefits.button': 'Experimenta el Poder',

    // How It Works Section
    'howworks.badge': 'Cómo Funciona',
    'howworks.title': 'Tu viaje desde',
    'howworks.title.highlight': 'chispa hasta éxito',
    'howworks.description': 'Tres pilares fundamentales de apoyo que proporcionan guía integral, insights de validación y resistencia emocional para fundadores solitarios.',
    'howworks.step1.title': 'Sociedad de Pensamiento',
    'howworks.step1.description': 'Participa en sesiones interactivas de lluvia de ideas para aclarar tu visión, refinar tu propuesta de valor y desarrollar planes estratégicos.',
    'howworks.step1.detail1': 'Refinamiento interactivo de ideas',
    'howworks.step1.detail2': 'Desarrollo de propuesta de valor',
    'howworks.step1.detail3': 'Asistencia en planificación estratégica',
    'howworks.step1.detail4': 'Soporte de comunicación y pitch',
    'howworks.step2.title': 'Marco de Validación',
    'howworks.step2.description': 'Diseña y ejecuta experimentos de validación de mercado con investigación guiada por IA para probar el ajuste producto-mercado.',
    'howworks.step2.detail1': 'Diseño de pruebas de hipótesis',
    'howworks.step2.detail2': 'Guía de investigación de mercado',
    'howworks.step2.detail3': 'Análisis de feedback de clientes',
    'howworks.step2.detail4': 'Herramientas de evaluación de demanda',
    'howworks.step3.title': 'Apoyo Continuo',
    'howworks.step3.description': 'Accede a apoyo emocional continuo, optimización de productividad y guía estratégica durante todo tu viaje como fundador.',
    'howworks.step3.detail1': 'Apoyo emocional confidencial',
    'howworks.step3.detail2': 'Coaching de productividad y enfoque',
    'howworks.step3.detail3': 'Técnicas de manejo del estrés',
    'howworks.step3.detail4': 'Refuerzo motivacional',
    'howworks.button': 'Comienza tu Viaje',
    'howworks.subtitle': 'Únete a fundadores solitarios que ya no viajan solos',

    // Footer Section
    'footer.badge': '¿Listo para Transformar?',
    'footer.title': '¿Listo para transformar tu',
    'footer.title.highlight': 'viaje como fundador?',
    'footer.description': 'Únete a fundadores solitarios que ya no navegan la incertidumbre solos. Obtén el socio de pensamiento estratégico, marco de validación y apoyo emocional que necesitas para tener éxito.',
    'footer.button.start': 'Comienza a Construir Hoy',
    'footer.button.demo': 'Programa una Demo',
    'footer.brand.description': 'Tu socio de pensamiento potenciado por IA proporcionando guía estratégica, marcos de validación y apoyo emocional para fundadores solitarios.',
    'footer.platform': 'Plataforma',
    'footer.company': 'Empresa',
    'footer.copyright': '© 2024 FounderIs. Todos los derechos reservados.',
    'footer.features': 'Características',
    'footer.pricing': 'Precios',
    'footer.stories': 'Historias de Éxito',
    'footer.documentation': 'Documentación',
    'footer.about': 'Acerca de',
    'footer.careers': 'Carreras',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Privacidad'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}