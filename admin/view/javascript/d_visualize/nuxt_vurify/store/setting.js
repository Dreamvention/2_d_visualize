import Vue from 'vue';
// state
export const state = () => ({
    all_setting: null,
    status: null,
	custom_style: '',
});
// getters
export const getters = {
    all_setting: state => state.all_setting,
	status: state=>state.status,
	custom_style: state=>state.custom_style,
};
// mutations
export const mutations = {
    SET_SETTING(state, payload) {
        state.all_setting = payload;
    },
    SET_STATUS(state, payload) {
        state.status = payload;
    },
    TOGGLE_STATUS(state, payload) {
        state.status = !state.status;
    },
	SET_GLOBAL_CUSTOM_STYLE(state, payload) {
		state.custom_style = payload;
	},
	CHANGE_ACTIVE_TEMPLATE(state, payload) {
		Vue.set(state.all_setting, 'active_template', payload);
	},
};
// actions
export const actions = {
    async GET_SETTING({commit}) {
        let {data} = await this.$axios.get('extension/d_visualize/setting')
        commit('SET_SETTING', data.setting)
        commit('SET_STATUS', data.status)
	    commit('SET_GLOBAL_CUSTOM_STYLE', data.custom_style);
    },
    async TOGGLE_STATUS({commit}) {
        commit('TOGGLE_STATUS')
    },
	async SET_GLOBAL_CUSTOM_STYLE({commit}, payload) {
		commit('SET_GLOBAL_CUSTOM_STYLE', payload);
		document.getElementById('iframe').contentWindow.postMessage({
			vz_token: true,
			vz_global_custom_style: payload
		}, "*");
	},
    async SAVE(context) {
        let {data} = await this.$axios.post('extension/d_visualize/setting/save', {
            status: context.getters.status,
            setting: context.getters.all_setting,
        })
    },
	async SAVE_CUSTOM_STYLE({commit, getters}, payload) {
		const {data} = await this.$axios.post('extension/d_visualize/setting/save_custom_style', {
			custom_style: getters.custom_style
		});
	},
	CHANGE_ACTIVE_TEMPLATE({commit}, payload) {
		commit('CHANGE_ACTIVE_TEMPLATE', payload);
	}

};
