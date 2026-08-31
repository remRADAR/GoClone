import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "../../src/site";

export const Route = createFileRoute("/work/portfolio")({
  component: PortfolioPage,
});
