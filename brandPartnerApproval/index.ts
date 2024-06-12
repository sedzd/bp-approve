import { api } from "encore.dev/api";
export const shorten = api(
  { method: "POST", path: "/approval", expose: true },
  async ({ amount }: { amount?: number }): Promise<{ action: string, memo: string }> => {
    if (amount !== undefined) {
      return {
        action: 'APPROVED',
        memo: 'Brand partner approve request'
      };
    }
    throw new Error('Amount field is required');
  },
);