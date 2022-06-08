import notion from "./notison";

export default async function getPage(pageId: string): Promise<any> {
  return await notion.pages.retrieve({
    page_id: pageId,
  });
}
