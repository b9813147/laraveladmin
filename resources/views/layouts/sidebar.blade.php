<v-list-item link>
    <v-list-item-action>
        <v-icon>mdi-view-dashboard</v-icon>
    </v-list-item-action>
    <v-list-item-content>
        <v-list-item-title>儀表板</v-list-item-title>
    </v-list-item-content>
</v-list-item>
<v-list-item link>
    <v-list-item-action>
        <v-icon>mdi-cogs</v-icon>
    </v-list-item-action>
    <v-list-item-content>
        <v-list-item-title>會員管理系統</v-list-item-title>
    </v-list-item-content>
</v-list-item>
<v-list-item link>
    <v-list-item-action>
        <v-icon>mdi-account</v-icon>
    </v-list-item-action>
    <v-list-item-content>
        <v-list-item-title>
            <a href="{{ url('/home') }}" style="text-decoration: none;color: black">
                成員管理
            </a>
        </v-list-item-title>
    </v-list-item-content>
</v-list-item>

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

