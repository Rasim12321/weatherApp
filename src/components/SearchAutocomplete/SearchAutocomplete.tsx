import axios from "axios";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AsyncPaginate } from "react-select-async-paginate";
import { OnChangeValue } from "react-select";
import { Option } from "./types";
import { CityData } from "../../models/city";

interface Props {
  onSearchChange: (city: number) => void;
}

const SearchAutocomplete = ({ onSearchChange }: Props) => {
  const { t } = useTranslation();
  const [city, setCity] = useState<Option | null>(null);

  const onSearchHandler = useCallback((city: OnChangeValue<Option, false>) => {
    setCity(city);
    onSearchChange(Number(city?.value));
  }, []);

  const getCityOptions = useCallback(async (inputValue: string) => {
    if (inputValue) {
      const { data }: { data: CityData } = await axios.get("/find", {
        params: { q: inputValue },
      });

      return {
        options: data.list.map((city) => {
          return {
            label: `${city.name} ${city.sys.country}`,
            value: city.id,
          };
        }),
      };
    }
    return {
      options: [],
    };
  }, []);

  return (
    <AsyncPaginate
      placeholder={t("search.placeholder")}
      debounceTimeout={600}
      value={city}
      onChange={onSearchHandler}
      loadOptions={getCityOptions as any}
    />
  );
};

export default SearchAutocomplete;
