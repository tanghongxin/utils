export const set = (property: string) => (state: Record<string, any>, payload: any) => (state[property] = payload);

export const toggle = (property: string) => (state: Record<string, any>) => (state[property] = !state[property]);
