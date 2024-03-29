export interface Basket {
  semelle?: string;
  empeigne?: string;
  pointe?: string;
  oeillet?: string;
  bande?: string;
  languette?: string;
  lacet?: string;
  trimestre?: string;
};

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};
export const materiaux = [
  {
    value: "https://www.cesarenori.fr/blog/wp-content/uploads/2020/08/grain-cuir-1024x680.jpg",
    label: "Cuir",
  },
  {
    value: "data:image/jpeg;base64,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",
    label: "Tissu",
  },
  {
    value: "https://d26itsb5vlqdeq.cloudfront.net//image/B5C3D15B-0407-167F-51E00AB4B55D258C",
    label: "Synthétique",
  },
];