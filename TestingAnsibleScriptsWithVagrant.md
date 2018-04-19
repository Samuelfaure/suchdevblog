---
title: Testing Ansible scripts with Vagrant
description: Very ansible, much deployment
footer: MIT Licensed | Copyright © 2018-present by Samuel Faure <3
---
# Testing ANSIBLE scripts without breaking everything with Vagrant

Testing ANSIBLE scripts for server deployment might be tricky.
It is easier to write complex deployment scripts aimed to deploying on clean servers. The correlation is that your script might break a server which is not clean. You might need an empty server to try your script on.

One solution is to subscribe for a free AWS server. But this solution is limited (time, available space).
Another solution is renting a cheap OVH server for 3.50 euros a month, but that might not be ideal either.

A better solution is provisioning to virtual servers with Vagrant. This solution also have the benefit of being local, so we don't even need internet for running tests on our ANSIBLE playbooks.

In this example, we will provision with ANSIBLE a rails app on a virtual server, using Vagrant.

## Step 1 : Install Virtualbox / Vagrant

```bash
sudo apt-get install virtualbox
sudo apt-get install vagrant
```

## Step 2 : Choose / execute your box

List of boxes available [here](https://app.vagrantup.com/boxes/search).

We will choose Ubuntu 16.04 (Xenial) :

```bash
vagrant init ubuntu/xenial64
```

You should have a directory vagrant_virtual_drives in your home, containing a log and a Vagrantfile. Go here and execute :

```bash
vagrant up
```

Check if everything works correctly by connecting to your virtual machine in SSH :

```bash
vagrant ssh
```

## Step 3 : configuring Vagrantfile for being provisioned by ANSIBLE / Forwarding Rails port 3000

Add this to your Vagrantfile :

```bash
Vagrant.configure("2") do |config|
  # Forward port 3000 to localhost so you can access your rails app in your browser
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
  # Allowing your virtual machine to be provisioned by ANSIBLE
  config.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
  end
end
```

## Step 4 : Provisioning your Vagrant virtual machine

Add your virtual machine to your ANSIBLE inventory :

```yaml
# MyAnsible/inventories/my_virtual_machine
[my-virtual-machine]

127.0.0.1 ansible_port=2222 ansible_user=YourBoxUser ansible_ssh_pass=YourSSHPassword
```

The IP 127.0.0.1 as well as the port (2222) are default for this box. When you vagrant up you can check if the values are correct (you can also check by running vagrant ssh-config).

Don't forget to replace YourBoxUser and YourSSHPassword. For most vagrant boxes, it should both be "vagrant". However, for the ubuntu/Xenial box and some others, the password is randomized for security reasons. You can check the username and password in your box default settings :

```bash
cat ~/.vagrant.d/boxes/ubuntu-VAGRANTSLASH-xenial64/20171011.0.0/virtualbox
```

20171011.0.0 is the date/version of the current box you're using. I'm writing this mid-october 2017. On this box, YourBoxUser should be "ubuntu".

Deploy your ansible to your virtual machine :

```bash
ansible-playbook MyPlaybook.yml -i inventories/my_virtual_machine
```

If all goes well, your deployment should start.
You might get the following error :

```bash
fatal: [127.0.0.1]: FAILED! => {"failed": true, "msg": "Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this. Please add this host's fingerprint to your known_hosts file to manage this host."}
```

In that case, either manually connect with SSH first : ssh YourBoxUser@127.0.0.1 -p 2222 (you will be prompted for YourSSHPassword)
You should be asked to validate a key fingerprint, accept it and you're done.

Another way to solve this error is creating in your ansible directory an ansible.cfg file with :

```yaml
[defaults]
host_key_checking = false
```

The error should be gone.

Another problem might be the absence of Python 2 on your box. If that happens, create a ANSIBLE playbook to install python without python being installed :

```yaml
# python-dirty-install.yml
- hosts: all
  gather_facts: False
  become: True

  tasks:
    - name: install python 2
      raw: test -e /usr/bin/python || (apt -y update && apt install -y python-minimal)
```

Run it with ansible-playbook python-dirty-install.yml -i inventories/my-virtual-machine. You should now be able to use your other playbook.

## Step 5 : Running your Rails server

If you did your deployment script properly, you should have your app folder on your virtual machine. Go there and launch your rails server. You need to start puma on a different port (3001) and rails on port 3000 :

```bash
bundle exec puma -C config/puma.rb -b tcp://127.0.0.1:3001
sudo rails server -p 3000 -b 0.0.0.0
```

Connect locally to [http://localhost:3000/](http://localhost:3000/). Congratulations, you are on Rails !

You can stop your vagrant virtual machine with vagrant halt if you want to keep it in its current state, or vagrant destroy to destroy it completely.