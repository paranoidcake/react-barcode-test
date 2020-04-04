export type FoodFactsEntry = {
    status_verbose: string;
    status: number;
    product: Product;
    code: string;
}

export type Ingredient = {
    id: string;
    rank: number;
    text: string;
}

export type NutrientLevels = {
    "saturated-fat": string;
    sugars: string;
    fat: string;
    salt: string;
}

export type Sources = {
    sources: Source[];
    additives_old_n: number;
}

export type Source = {
    import_t: number;
    images: [];
    url: string;
    fields: string[];
    id: string;
}

export type Nutriments = {
    salt_100g: number;
    saturated_fat_100g: number;
    fiber_100g: number;
    sugars_100g: number;
    carbohydrates_100g: number;
    sodium_100g: number;
    fat_100g: number;
    energy_100g: number;
    proteins_100g: number;
}

export type Product = {
    serving_size: string;
    labels_prev_tags: string[];
    ingredients_analysis_tags: string[];
    ingredients_debug: string[];
    countries_tags: string[];
    ingredients: Ingredient[];
    traces_hierarchy: string[];
    sortkey: number;
    unknown_ingredients_n: number;
    allergens_from_ingredients: string;
    traces_debug_tags: any[];
    languages: Object[];
    checkers_tags: any[];
    photographers: string[];
    brands: string;
    manufacturing_places_tags: any[];
    other_nutritional_substances_tags: any[];
    image_front_thumb_url: string;
    brands_tags: string[];
    lc: string;
    photographers_tags: string[];
    ingredients_from_or_that_may_be_from_palm_oil_n: number;
    brands_debug_tags: any[];
    image_ingredients_small_url: string;
    minerals_prev_tags: any[];
    serving_quantity: string;
    stores_debug_tags: any[];
    last_editor: string;
    informers: string[];
    _id: string;
    origins: string;
    categories_hierarchy: string[];
    nucleotides_tags: any[];
    vitamins_tags: any[];
    nutrition_data_per: string;
    vitamins_prev_tags: any[];
    ingredients_hierarchy: string[];
    image_nutrition_small_url: string;
    nutrition_score_warning_no_fruits_vegetables_nuts: number;
    additives_tags: string[];
    ingredients_from_palm_oil_n: number;
    languages_codes: Object[];
    traces: string;
    nutrition_data_prepared: string;
    no_nutrition_data: string;
    nova_group_debug: string;
    emb_codes_tags: any[];
    informers_tags: string[];
    emb_codes_debug_tags: any[];
    ingredients_text_en: string;
    image_nutrition_thumb_url: string;
    categories: string;
    additives_original_tags: string[];
    labels_prev_hierarchy: string[];
    pnns_groups_2: string;
    ingredients_original_tags: string[];
    additives_debug_tags: any[];
    type_version_modified: string;
    emb_codes_20141016: string;
    origins_tags: string[];
    link_debug_tags: any[];
    manufacturing_places: string;
    scans_n: number;
    product_quantity: string;
    product_name: string;
    lang_debug_tags: any[];
    ingredients_text_debug: string;
    max_imgid: string;
    allergens_hierarchy: string[];
    additives_n: number;
    ingredients_n: number;
    labels: string;
    image_thumb_url: string;
    ingredients_text: string;
    rev: number;
    entry_dates_tags: string[];
    image_ingredients_url: string;
    last_image_dates_tags: string[];
    image_url: string;
    product_name_en: string;
    minerals_tags: any[];
    last_modified_t: number;
    nova_groups: string;
    amino_acids_tags: any[];
    emb_codes_orig: string;
    purchase_places_debug_tags: any[];
    lang: string;
    states: string;
    manufacturing_places_debug_tags: any[];
    nutrition_score_debug: string;
    code: string;
    "fruits-vegetables-nuts_100g_estimate": number;
    expiration_date_debug_tags: any[];
    countries_lc: string;
    image_front_small_url: string;
    image_front_url: string;
    link: string;
    nutrition_data_prepared_per: string;
    labels_tags: string[];
    nutrient_levels: NutrientLevels;
    additives_prev_original_tags: string[];
    countries_hierarchy: string[];
    categories_tags: string[];
    debug_param_sorted_langs: string[];
    traces_tags: string[];
    origins_debug_tags: any[];
    pnns_groups_1_tags: string[];
    last_image_t: number;
    serving_size_debug_tags: any[];
    _keywords: string[];
    ingredients_ids_debug: string[];
    allergens_tags: string[];
    ingredients_that_may_be_from_palm_oil_n: number;
    product_name_en_debug_tags: any[];
    packaging_tags: string[];
    ingredients_from_palm_oil_tags: any[];
    pnns_groups_2_tags: string[];
    nutrition_score_beverage: number;
    nova_groups_tags: string[];
    labels_hierarchy: string[];
    stores_tags: any[];
    expiration_date: string;
    codes_tags: string[];
    images: Object[];
    quantity: string;
    emb_codes: string;
    traces_from_ingredients: string;
    stores: string;
    id: string;
    allergens: string;
    image_small_url: string;
    purchase_places_tags: any[];
    purchase_places: string;
    pnns_groups_1: string;
    amino_acids_prev_tags: any[];
    nutrition_data_prepared_per_debug_tags: any[];
    states_hierarchy: string[];
    checkers: any[];
    nutrition_data_per_debug_tags: any[];
    cities_tags: any[];
    generic_name_en_debug_tags: any[];
    ingredients_tags: string[];
    languages_tags: string[];
    creator: string;
    misc_tags: string[];
    nutrient_levels_tags: string[];
    selected_images: Object[];
    ingredients_text_en_debug_tags: any[];
    ingredients_text_with_allergens_en: string;
    update_key: string;
    packaging: string;
    quantity_debug_tags: any[];
    ingredients_text_with_allergens: string;
    type_version_created: string;
    nutriments: Nutriments;
    unique_scans_n: number;
    packaging_debug_tags: any[];
    image_nutrition_url: string;
    correctors: string[];
    popularity_tags: string[];
    countries_debug_tags: any[];
    quality_tags: string[];
    editors_tags: string[];
    unknown_nutrients_tags: any[];
    completed_t: number;
    additives_tags_n?: any;
    nutrition_grades: string;
    created_t: number;
    generic_name_en: string;
    editors: string[];
    completeness: number;
    last_edit_dates_tags: string[];
    ingredients_that_may_be_from_palm_oil_tags: any[];
    nutrition_grades_tags: string[];
    correctors_tags: string[];
    nutrition_data: string;
    last_modified_by: string;
    categories_lc: string;
    nova_group: string;
    states_tags: string[];
    new_additives_n: number;
    sources: Source[];
    additives_old_n: number;
    ingredients_n_tags: string[];
    nutrition_grade_fr: string;
    labels_lc: string;
    languages_hierarchy: string[];
    generic_name: string;
    complete: number;
    additives_old_tags: string[];
    countries: string;
    image_ingredients_thumb_url: string;
    nucleotides_prev_tags: any[];
}