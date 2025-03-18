"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import { IntegrationCard } from "../IntegrationCard";
import { motion } from "framer-motion";

interface IntegrationColumnProps {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}

export const IntegrationsColumn = (props: IntegrationColumnProps) => {
  const { integrations, reverse } = props;
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex flex-col gap-4"
    >
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.name}
          name={integration.name}
          icon={integration.icon}
          description={integration.description}
        />
      ))}

      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.name}
          name={integration.name}
          icon={integration.icon}
          description={integration.description}
        />
      ))}
    </motion.div>
  );
};
