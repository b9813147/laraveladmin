<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<div class="px-3">
    <v-avatar>
        <img style="width: 100%; object-fit: contain;" src="{{ url('images/logo.png') }}" alt="">
    </v-avatar>
</div>
<v-toolbar-title>DMP 管理系統</v-toolbar-title>
<v-toolbar-items class="ml-auto">
    <v-menu transition="scale-transition">
        <template v-slot:activator="{ on }">
            <v-btn
                dark
                color="blue-grey darken-2"
                v-on="on"
            >
                語系
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="v in langs" :key="v.text" @click="">
                <v-list-item-title v-text="v.text" @click="setLang(v.value)"/>
            </v-list-item>
        </v-list>
    </v-menu>
</v-toolbar-items>
