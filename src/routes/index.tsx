import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../site";

export const Route = createFileRoute("/")({
  component: HomePage,
});
