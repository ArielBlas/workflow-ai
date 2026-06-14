import { ExecutionEnvironment } from "@/types/executor";
import { PageToHtmlTask } from "../task/PageToHtml";

export async function PageToHtmlExecutor(
  environment: ExecutionEnvironment<typeof PageToHtmlTask>,
): Promise<boolean> {
  try {
    const html = environment.getPage()!.content();
    environment.setOutput("HTML", html);
    return true;
  } catch (error) {
    return false;
  }
}
