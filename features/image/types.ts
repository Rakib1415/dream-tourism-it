export interface HomeSliderItem {
  id: number;
  created_by?: string;
  updated_by?: string;
  title: string;
  subtitle: string;
  link?: string | null;
  serial_number?: number | null;
  image: string;
  details?: string | null;
  created_at: string;
  updated_at: string;
}

export interface HomepageSlider {
  homepage_sliders: HomeSliderItem[];
}
