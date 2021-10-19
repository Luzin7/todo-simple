<template>
    <div class="header">
        <div class="container grid-lg">
            <header class="navbar">
                <section class="navbar-section">
                    <router-link class="btn btn-header btn-link" to="/">Home</router-link>
                    <router-link class="btn btn-header btn-link" to="/kanban">Kanban</router-link>
                </section>
                <!--Internal Links-->
                <section class="navbar-section">
                    <a class="btn btn-header btn-link" href="https://github.com/Luzin7">Github</a>
                </section>
                <!--External Links-->
            </header>
        </div> 
    </div>
</template>

<style scoped>
.header{
    color: #808B96;
}
</style>