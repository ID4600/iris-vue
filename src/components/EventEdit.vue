<template>
    <div class="add-event">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <div v-if="event">
            <event-form v-bind:event="event" v-bind:edit="true"></event-form>
        </div>
    </div>
</template>

<script>
import EventForm from './EventForm.vue'
import { getPrivateEvent } from '../utils/events-api'

export default {
    components: {
        EventForm
    },
    name: 'EventAdd',
    methods: {
        getPrivateEvent () {
            getPrivateEvent(this.$route.params.id).then((event) => {
                this.event = event
            })
        }
    },
    data () {
        return {
            breadcrumbs: [{
                text: 'Home',
                to: '/'
            }, {
                text: this.$t('events'),
                to: '/events'
            }, {
                text: this.$t('details'),
                to: '/event/' + this.$route.params.id
            }, {
                text: this.$t('edit-event'),
                active: true
            }],
            event: undefined
        }
    },
    mounted () {
        this.getPrivateEvent()
    }
}
</script>
