<template>
    <div>
        <!-- {/* GREETINGS */} -->
        <!-- <Typography variant="h4" align="left" sx={{ color: #3498db , textTransform: uppercase , margin: 20px 0 }}>
            {t("welcome")}
        </Typography>
        <Divider sx={{ width: "100%" , margin: "20px 0 8px" }} /> -->
        <!-- <p>Welcome to Billboard!</p> -->
    <v-app id="inspire">
        
        <!-- <v-main>
            <v-container> -->
                <v-row>
                    <v-col v-for="n in 24" :key="n" cols="4">
                        <v-card height="200"></v-card>
                    </v-col>
                </v-row>
            <!-- </v-container>
        </v-main> -->
    </v-app>
        <!-- {/* FILTERS */} -->
        <!-- <div>
            <SearchInput onEnter={handleSearch} />
    
            <SortSelector initSort={`${sortKey} ${sortValue}`} handleChangeSort={handleChangeSort} />
    
            <MultipleSelect categories={categories} setCategories={setCategories} />
        </div> -->
        <!-- <Box sx={{ width: "100%" , display: "flex" , justifyContent: "space-between" , mb: "24px" , }}> -->
        <!-- </Box> -->

        <!-- {/* BILLS */} -->
        <!-- {bills &&
        <BillsList bills={bills} />} -->

        <!-- {/* PAGINATION */} -->
        <!-- {count > 1 && (
        <Box mt={5}>
            <Pagination page={page} size="large" count={count} shape="rounded" showFirstButton showLastButton sx={{ "& ul" : {
                justifyContent: "center" , }, }} onChange={handleChangePage} />
        </Box>
        )} -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>