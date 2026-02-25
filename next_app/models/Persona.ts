import { Schema, model, models } from 'mongoose';

// --- SCHEMA DOS PERSONAS ---
const PersonaSchema = new Schema({
  gameId: { type: String, required: true, index: true },
  name: { type: String, required: true },
  lvl: { type: Number, required: true },
  race: { type: String, required: true },
  resistances: {
    slash: String, strike: String, pierce: String,
    fire: String, ice: String, elec: String,
    wind: String, light: String, dark: String, almighty: String
  },
  skills: Object, // Mapeamento de Skill: Level
  stats: [Number],
  heart: String,
  heartlvl: Number,
  special: Boolean // Opcional: para identificar se é de receita fixa
});

// --- SCHEMA DO FUSION CHART (ATUALIZADO) ---
const FusionChartSchema = new Schema({
  gameId: { type: String, required: true, unique: true },
  races: [String],
  table: [[String]],
  
  // Novos campos que você adicionou via insertMany:
  dlc: [String], 
  
  // Usamos Object ou Map para campos com chaves dinâmicas (como nomes de Arcanas ou Personas)
  modifiers: { type: Object }, 
  
  "special-recipes": { type: Schema.Types.Mixed },
  
  "skill-data": { type: Schema.Types.Mixed }
  
}, { 
  collection: 'fusion_charts',
  minimize: false // Garante que objetos vazios {} não sejam removidos
});

// --- EXPORTAÇÃO DOS MODELOS ---
export const Persona = models.Persona || model('Persona', PersonaSchema);
export const FusionChart = models.FusionChart || model('FusionChart', FusionChartSchema);