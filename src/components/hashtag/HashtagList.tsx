import HashtagItem from "./HashtagItem";

type HashTagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashTagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return <HashtagItem company={company} onClick={handleSelectCompany} />;
      })}
    </ul>
  );
}
