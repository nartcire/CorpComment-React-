type HashtagItemProps = {
  company: string;
  onClick: (company: string) => void;
};

export default function HashtagItem({ company, onClick }: HashtagItemProps) {
  return (
    <li key={company}>
      <button onClick={() => onClick(company)}>#{company}</button>
    </li>
  );
}
