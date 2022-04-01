# Generated by Django 3.1.12 on 2022-03-08 17:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scan_conf', '0001_initial'),
        ('nodemgr', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NodeToolProcessRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('checktool', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scan_conf.checktool', verbose_name='工具')),
                ('node', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nodemgr.node', verbose_name='节点')),
                ('process', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scan_conf.process', verbose_name='进程')),
            ],
        ),
        migrations.CreateModel(
            name='NodeStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cpu_num', models.IntegerField(default=0, verbose_name='CPU数量')),
                ('cpu_usage', models.IntegerField(default=0, verbose_name='CPU使用率')),
                ('mem_space', models.BigIntegerField(default=0, verbose_name='内存空间')),
                ('mem_free_space', models.BigIntegerField(default=0, verbose_name='内存可用空间')),
                ('hdrive_space', models.BigIntegerField(default=0, verbose_name='磁盘空间')),
                ('hdrive_free_space', models.BigIntegerField(default=0, verbose_name='磁盘可用空间')),
                ('network_latency', models.BigIntegerField(default=0, verbose_name='网络延迟')),
                ('timestamp', models.DateTimeField(auto_now=True, verbose_name='记录时间')),
                ('os', models.CharField(max_length=128, verbose_name='操作系统')),
                ('node', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nodemgr.node', verbose_name='节点名称')),
            ],
        ),
    ]