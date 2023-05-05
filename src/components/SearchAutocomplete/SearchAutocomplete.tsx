import axios from "axios";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AsyncPaginate } from "react-select-async-paginate";
import { OnChangeValue } from "react-select";
import { Option } from "./types";
import { CityData } from "../../models/city";
import { coords } from "../../store/actions/cityWeather.action";

interface Props {
  onSearchChange: (city: coords | null) => void;
}

const SearchAutocomplete = ({ onSearchChange }: Props) => {
  const { t } = useTranslation();
  const [city, setCity] = useState<Option | null>(null);

  const onSearchHandler = useCallback((city: OnChangeValue<Option, false>) => {
    setCity(city);
    // @ts-ignore
    onSearchChange(city?.value);
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
            value: { lat: city.coord.lat, lon: city.coord.lon },
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
