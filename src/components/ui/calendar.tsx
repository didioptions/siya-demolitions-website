<DayPicker
  showOutsideDays={showOutsideDays}
  className={cn("p-3", className)}
  classNames={{ ... }}
  components={{
    Chevron: ({ orientation, className, ...props }) =>
      orientation === "left" ? (
        <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
      ) : (
        <ChevronRight className={cn("h-4 w-4", className)} {...props} />
      ),
  }}
  {...props}
/>