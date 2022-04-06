<v-navigation-drawer class="blue lighten-5" mini-variant-width="70" width="250" light v-model="drawer" app>
    <v-list class="pa-0" dense>
        <v-list-item tag="div">
            <v-list-item-action>
                {{--            <v-avatar>--}}
                <img max-width="2.5em" class="avatar" src="{{ url('images/litv_logo.png') }}" alt="">
                {{--            </v-avatar>--}}
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{ auth()->user()->name }}</v-list-item-title>
            </v-list-item-content>
            {{--        <v-spacer></v-spacer>--}}
            <v-list-item-action style="max-width:1em">
                <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn icon small light slot="activator" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="item in userMenus" :key="item.title" value="true" @click="handleUserActions(item)">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-list-item-action>
        </v-list-item>
    </v-list>

    <v-list>
        <v-list-item v-for="item in appMenus" :key="item.text" link :href="item.href">
            <v-list-item-action>
                <v-icon>@{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>@{{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
{{--        <v-list-item link to="/group/channel">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-library-video</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('channel_content_manager') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
{{--        <v-list-item link to="/group/subject">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-book</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('subject_manager') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
{{--        <v-list-item link to="/group/rating">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-book</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('rating_manager') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
{{--        <v-list-item link to="/division/index" v-if="this.$store.state.Auth.user.public ===1">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-group</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('division.admin') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
{{--        <v-list-item link to="/group/notification">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-bell</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('notification.admin') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
{{--        <v-list-item link to="/group/tag">--}}
{{--            <v-list-item-action>--}}
{{--                <v-icon>mdi-tag</v-icon>--}}
{{--            </v-list-item-action>--}}
{{--            <v-list-item-content>--}}
{{--                <v-list-item-title>{{ $t('tag.admin') }}</v-list-item-title>--}}
{{--            </v-list-item-content>--}}
{{--        </v-list-item>--}}
<!--                <v-list-item link to="/qrcode">-->
    <!--                    <v-list-item-action>-->
    <!--                        <v-icon>mdi-qrcode-edit</v-icon>-->
    <!--                    </v-list-item-action>-->
    <!--                    <v-list-item-content>-->
    <!--                        <v-list-item-title>QrCode</v-list-item-title>-->
    <!--                    </v-list-item-content>-->
    <!--                </v-list-item>-->

</v-navigation-drawer>
