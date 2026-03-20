components={{
  Chevron: ({ orientation, className, ...props }) =>
    orientation === "left" ? (
      <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
    ) : (
      <ChevronRight className={cn("h-4 w-4", className)} {...props} />
    ),
}}