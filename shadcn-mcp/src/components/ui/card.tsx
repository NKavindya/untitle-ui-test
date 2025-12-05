import * as React from 'react';

export const Card = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
    {...props}
  />
);

export const CardHeader = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col gap-1 border-b border-slate-100 px-4 py-3 ${className}`} {...props} />
);

export const CardTitle = ({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-sm font-semibold text-slate-900 ${className}`} {...props} />
);

export const CardDescription = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-xs text-slate-500 ${className}`} {...props} />
);

export const CardContent = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 py-3 ${className}`} {...props} />
);




