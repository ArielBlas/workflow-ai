import puppeteer from "puppeteer";
import { ExecutionEnvironment } from "@/types/executor";

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment,
): Promise<boolean> {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    await browser.close();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
