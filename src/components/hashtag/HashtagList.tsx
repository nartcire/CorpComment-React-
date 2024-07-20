import HashtagItem from "./HashtagItem";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

export default function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );

  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            key={company}
            company={company}
            onClick={handleSelectCompany}
          />
        );
      })}
    </ul>
  );
}
