'use server';
/**
 * @fileOverview Recommends equipment, accessories, and services based on project requirements.
 *
 * - recommendEquipment - A function that takes project details and returns equipment recommendations.
 * - RecommendEquipmentInput - The input type for the recommendEquipment function.
 * - RecommendEquipmentOutput - The return type for the recommendEquipment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendEquipmentInputSchema = z.object({
  projectGoals: z
    .string()
    .describe('The goals of the project, including what needs to be accomplished.'),
  projectConstraints: z
    .string()
    .describe(
      'Any constraints on the project, such as budget, timeline, or space limitations.'
    ),
});
export type RecommendEquipmentInput = z.infer<typeof RecommendEquipmentInputSchema>;

const RecommendEquipmentOutputSchema = z.object({
  equipmentRecommendations: z
    .string()
    .describe('A list of recommended equipment for the project.'),
  accessoryRecommendations: z
    .string()
    .describe('A list of recommended accessories for the project.'),
  serviceRecommendations: z
    .string()
    .describe('A list of recommended services for the project.'),
});
export type RecommendEquipmentOutput = z.infer<typeof RecommendEquipmentOutputSchema>;

export async function recommendEquipment(input: RecommendEquipmentInput): Promise<RecommendEquipmentOutput> {
  return recommendEquipmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendEquipmentPrompt',
  input: {schema: RecommendEquipmentInputSchema},
  output: {schema: RecommendEquipmentOutputSchema},
  prompt: `You are an expert in construction equipment, accessories, and services.

  Based on the project goals and constraints provided, recommend the best equipment, accessories, and services for the project.

  Project Goals: {{{projectGoals}}}
  Project Constraints: {{{projectConstraints}}}

  Format your response as follows:

  Equipment Recommendations: [list of equipment]
  Accessory Recommendations: [list of accessories]
  Service Recommendations: [list of services]`,
});

const recommendEquipmentFlow = ai.defineFlow(
  {
    name: 'recommendEquipmentFlow',
    inputSchema: RecommendEquipmentInputSchema,
    outputSchema: RecommendEquipmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
