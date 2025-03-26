import { api } from "encore.dev/api";
export const approval = api(
  { method: "POST", path: "/approval", expose: true },
async ({ merchant_amount }: { merchant_amount?: { amount?: number } }): Promise<{ action: string, memo: string }> => {
  if (merchant_amount?.amount !== undefined) {
    return {
      action: 'APPROVED',
      memo: 'Brand partner approve request'
    };
  }
  throw new Error('Merchant amount field is required');
},
);
export const decline = api(
  { method: "POST", path: "/decline", expose: true },
  async (): Promise<{ action: string, memo: string }> => {
    return {
      action: 'DECLINED',
      memo: 'Brand partner decline request'
    };
  },
); 




export const webhook = api(
  { method: "POST", path: "/webhook", expose: true },
  async (payload: any): Promise<{ status: string, received: any }> => {
    console.log('Webhook received payload:', payload);
    
    return {
      status: 'OK',
      received: payload
    };
  },
); 