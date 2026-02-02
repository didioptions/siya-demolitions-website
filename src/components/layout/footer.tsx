export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-6 text-center text-muted-foreground">
        <p>&copy; {year} Siya Demolitions Projects | Call: 078 429 2760</p>
      </div>
    </footer>
  );
}
