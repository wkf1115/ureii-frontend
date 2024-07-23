import React from 'react';

const Icon = ({ iconName, className }) => {
  const [IconComponent, setIconComponent] = React.useState(null);

  React.useEffect(() => {
    import(`@heroicons/react/24/outline/${iconName}`).then((module) => {
      setIconComponent(() => module.default);
    }).catch(() => {
      setIconComponent(() => null);
    });
  }, [iconName]);

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent className={className} />;
};

export default Icon;