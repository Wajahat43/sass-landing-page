import { type IntegrationsType } from "@/sections/Integrations";
import { IntegrationCard } from "../IntegrationCard";

interface IntegrationColumnProps {
  integrations: IntegrationsType;
  className?: string;
}

export const IntegrationsColumn = (props: IntegrationColumnProps) => {
  const { integrations, className } = props;
  return (
    <div className="flex flex-col gap-4">
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.name}
          name={integration.name}
          icon={integration.icon}
          description={integration.description}
        />
      ))}
    </div>
  );
};
