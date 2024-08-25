import { commaFormatNumbers } from "../../../utils/formatViews";

const ViewsAndDate = ({ views, addedOn }: { views: number, addedOn: string }) => (
    <div className="flex justify-between text-sm text-gray-500 w-full">
        {/* Views on the left */}
        <span>{commaFormatNumbers(views)} views</span>

        {/* Added date on the right */}
        <span>Added on {new Date(addedOn).toLocaleDateString()}</span>
    </div>
);


export default ViewsAndDate