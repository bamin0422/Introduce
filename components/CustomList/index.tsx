export interface CustomListProps {
  title?: string;
  list: Array<string>;
}

export function CustomList({ title, list }: CustomListProps) {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-xl px-4 my-2">
      <h3>{title}</h3>
      <ul className="list-outside list-disc ml-6 text-left py-2">
        {list.map((title) => {
          return (
            <li key={title} className="text-blue-500 py-1">
              <span className="text-black dark:text-white">{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
