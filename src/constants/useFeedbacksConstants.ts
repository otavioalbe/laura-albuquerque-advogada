import type { FeedbackType } from '../types/FeedbackType';

// ✅ Reviews reais do Google — datas exatas do publishTime da Places API
// 📝 Placeholders com datas aproximadas — substitua com reviews reais quando quiser
//
// Para atualizar a foto de um avaliador:
//   Inspecione o avatar no Google Maps e copie a URL da <img> para o campo photoUrl.
export const feedbacks: FeedbackType[] = [
  // --- REAIS ---
  {
    name: 'Katia Larissa Grigolo',
    rating: 5,
    text: 'A Laura é uma exímia profissional, sempre atualizada e habilidosa para explicar qualquer dúvida que possa surgir. Indico de olhos fechados!',
    date: '2026-02-02',
    photoUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjWCxHAm677bw8nidePm8bKGR5tUVE6r1EanVV1jO0sSTgLzSC1-=s128-c0x00000000-cc-rp-mo',
  },
  {
    name: 'Ana Karina Paludo',
    rating: 5,
    text: 'A Laura é muito inteligente e extremamente preocupada, explica tudo muito bem e te deixa super seguro nas tomadas de decisões, muitooo necessária para vida do casal hahahah',
    date: '2025-07-17',
    photoUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjV-bjRYVgQ9l2QVlNmMB2T5Ztv2qg4w3vX0nI7FeNdjgX_7g54=s128-c0x00000000-cc-rp-mo',
  },
  {
    name: 'Vitor Freddo',
    rating: 5,
    text: 'Além de uma dedicação fora da curva, o profissionalismo apresentado pela Doutora é de se admirar. Me manteve informado a cada passo que o processo deu, sempre apresentando as melhores alternativas para a sequência do caso. Super recomendo o trabalho dela!',
    date: '2025-03-25',
    photoUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJXAJiBDIZCNyOldHROnuvWAAyZQu3_jTo8RHCueX58ulStFA=s128-c0x00000000-cc-rp-mo',
  },
  {
    name: 'Otavio Albuquerque',
    rating: 5,
    text: 'Atendimento impecável e muito humano! Fácil de compreender, muito prestativa e atenciosa.',
    date: '2025-07-07',
    photoUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIc4kguBs-WGEWXwsRSy46qWwdIKj93J89k5a_dRgb3B2sdGMk=w72-h72-p-rp-mo-br100',
  },
  {
    name: 'João Marcelo Zandoná',
    rating: 5,
    text: 'Confio de olhos fechados. Além de um ser humano incrível a Dra. Laura é a melhor advogada de família do país. Se tratando de questões sucessórias, não há dúvida de que ela é a especialista.',
    date: '2025-03-21',
    photoUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIdgvPbZWcKzy9kTL0Cyhypoft32uc7n_WhMSj1yAEMn54wWA=s128-c0x00000000-cc-rp-mo',
  },
  {
    name: 'Rosana Hans',
    rating: 5,
    text: 'Uma advogada extremamente competente, inteligente e de fácil comunicação. Mostra-se sempre atenta aos detalhes, com uma capacidade ímpar de encontrar soluções eficazes para qualquer desafio. Além de todo seu conhecimento jurídico, sua postura acolhedora e empática faz toda a diferença, transmitindo segurança e confiança a todos que têm o privilégio de trabalhar ao seu lado. Uma verdadeira inspiração na advocacia!',
    date: '2025-03-21',
    photoUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIc6JhibnC64Xn5WKXWTS05ypSa2c-c02i6cXoBOUNHpGE6oQ=s128-c0x00000000-cc-rp-mo',
  },

  // --- PLACEHOLDERS — substitua com reviews reais ---
  {
    name: 'Gabriela Duz',
    rating: 5,
    text: 'Excelente profissional! Facilita muito na linguagem e comunicação plena. Indico para união estável, inventário, testamento, consulta jurídica, organização do patrimônio….',
    date: '2025-04-01',
  },
  {
    name: 'Maria Eduarda Cargnin',
    rating: 5,
    text: 'A Dra. Laura é uma excelente profissional, com muito conhecimento e responsabilidade. Atuação impecável desde a primeira reunião, tornando-se hoje minha advogada pessoal. Recomendo a todos!',
    date: '2025-03-01',
  },
  {
    name: 'Eliane Nervo',
    rating: 5,
    text: 'Uma ótima profissional. "Agradeço imensamente à Laura pela sua excepcional atuação. Sua rapidez em responder às dúvidas, aliada à eficácia na resolução do problema, demonstra um profissionalismo exemplar. Recomendo seus serviços a quem busca não apenas assistência legal, mas também a tranquilidade de ter um processo conduzido com competência e eficiência."',
    date: '2024-04-01',
  },
  {
    name: 'Anna Emanuelle Cararo Spolti',
    rating: 5,
    text: 'Uma excelente profissional! Muito transparente e objetiva, tirou todas as minhas dúvidas e me deu direcionamento.',
    date: '2024-03-01',
  },
  {
    name: 'Manoela Rodrigues',
    rating: 5,
    text: 'Laura é extremamente competente, não apenas com as questões jurídicas, mas também com a condução emocional que essa área do direito de família e sucessões exige.',
    date: '2024-02-01',
  },
  {
    name: 'Náira Márcia Pinto Cottens',
    rating: 5,
    text: 'Laura excelente profissional, sempre me atendendo a qualquer dúvida, e com vocabulário de fácil entendimento para nós, leigos do Direito, muito atenta a tudo!',
    date: '2024-01-01',
  },
  {
    name: 'Renato Diogo da Silva',
    rating: 5,
    text: 'Excelente profissional, dedicada e ágil para resolver todos os problemas surgidos em nosso processo. Super indico.',
    date: '2023-12-01',
  },
  {
    name: 'Instituto Monteiro',
    rating: 5,
    text: 'Dra Laura é maravilhosa! Eu que não sou da área jurídica sempre tive muitas dúvidas, ela sempre foi muito clara em todas as etapas! Eu super recomendo o trabalho dela!',
    date: '2023-11-01',
  },
  {
    name: 'Anna Poletto',
    rating: 5,
    text: 'Doutora Laura é uma profissional excelente, sempre disposta a sanar qualquer dúvida que tínhamos. Ótima profissional!',
    date: '2023-10-01',
  },
];

export const overallRating = 5.0; // nota geral no Google
export const totalReviews = 47; // total de avaliações no Google
