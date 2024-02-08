import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WorkSelect() {
  return (
    <Select>
      <SelectTrigger className="w-36">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="front-end">Front End</SelectItem>
      </SelectContent>
    </Select>
  );
}
