import notion from "./notison";

export default async function getBlockList(blockId: string): Promise<any> {
  return await notion.blocks.children.list({
    block_id: blockId,
  });
}
