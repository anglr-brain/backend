import { Controller, Get, Header } from "@nestjs/common";
import { ApiExcludeEndpoint } from "@nestjs/swagger";

@Controller()
export class AppController {
  @ApiExcludeEndpoint()
  @Header("Content-Type", "text/plain; charset=utf-8")
  @Get("robots.txt")
  public robots(): string {
    return "User-agent: Googlebot\nDisallow:\n\nUser-agent: AdsBot-Google\nDisallow: /\n\nUser-agent: *\nDisallow: /";
  }
}
