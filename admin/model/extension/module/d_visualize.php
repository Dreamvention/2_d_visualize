<?php
/*
*   location: admin/model
*/

class ModelExtensionModuleDVisualize extends Model
{
    private $codename = 'd_visualize';

    public function _construct($registry)
    {
        $this->extension = json_decode(file_get_contents(DIR_SYSTEM . 'library/d_shopunity/extension/' . $this->codename . '.json'), true);
    }

    public function checkInstallModule()
    {
        $this->load->model('extension/d_opencart_patch/extension');
        if (!$this->model_extension_d_opencart_patch_extension->isInstalled($this->codename)) {
            return false;
        }
        $this->load->model('setting/setting');
        $setting_module = $this->model_setting_setting->getSetting($this->codename);
        if (!$setting_module) {
            return false;
        }
        return true;
    }

    /**
     * Install config Visualize
     * @param $config_name
     * @throws Exception
     */
    public function installConfig($config_name = false)
    {
        $this->load->model('extension/d_opencart_patch/extension');
        $this->load->model('extension/d_opencart_patch/setting');
        $this->load->model('extension/d_opencart_patch/user');
        if (!$this->model_extension_d_opencart_patch_extension->isInstalled($this->codename)) {
                $this->model_extension_d_opencart_patch_extension->install('module', $this->codename);
            $this->load->controller('extension/module/' . $this->codename . '/install');
        }
        $this->load->model('setting/setting');
        $setting_module = $this->model_extension_d_opencart_patch_setting->getSetting($this->codename);
        if (!empty($setting_module[$this->codename . '_setting'])) {
            $this->load->controller('extension/' . $this->codename . '/uninstallEvents');
            $this->load->controller('extension/' . $this->codename . '/installEvents');
            $setting_module[$this->codename . '_status'] = 1;
            $this->model_extension_d_opencart_patch_setting->editSetting($this->codename, $setting_module);
        } else {
            $this->load->config($this->codename);
            $setting = $this->config->get($this->codename . '_setting');
            $this->load->controller('extension/' . $this->codename . '/installTheme');
            $this->model_extension_d_opencart_patch_setting->editSetting($this->codename, array(
                $this->codename . '_setting' => $setting,
                $this->codename . '_status'  => 1
            ));
        }
    }
    public function getVueTemplates() {
        $files = glob(DIR_TEMPLATE.'extension/'.$this->codename.'/**/*.vue');
        foreach ($files as $key => $file) {
            $files[$key] = str_replace(array(DIR_TEMPLATE, '.vue'), '', $file);
        }

        return $files;
    }

    public function getVueScripts() {
        $results = array();
        $files = glob(DIR_APPLICATION.'view/javascript/'.$this->codename.'/model/**/*.js');
        foreach ($files as $file) {
            $results[] = str_replace(DIR_APPLICATION, '', $file);
        }

        $files = glob(DIR_APPLICATION.'view/javascript/'.$this->codename.'/model/*.js');
        foreach ($files as $file) {
            $results[] = str_replace(DIR_APPLICATION, '', $file);
        }

        $files = glob(DIR_APPLICATION.'view/javascript/'.$this->codename.'/actions/*.js');
        foreach ($files as $file) {
            $results[] = str_replace(DIR_APPLICATION, '', $file);
        }

        $files = glob(DIR_APPLICATION.'view/javascript/'.$this->codename.'/mutations/*.js');
        foreach ($files as $file) {
            $results[] = str_replace(DIR_APPLICATION, '', $file);
        }

        return $results;
    }

}