export type FeedbackType = {
  name: string;
  rating: number; // 1 a 5
  text: string;
  date: string; // ISO 8601 — ex: "2025-03-21" (calculado automaticamente para "há X meses/anos")
  profileInitial?: string; // inicial do nome para avatar (fallback)
  photoUrl?: string; // URL da foto de perfil (opcional — ver instruções no constants)
};
