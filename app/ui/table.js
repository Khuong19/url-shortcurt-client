'use client';
import React, { useRef, useState } from 'react';
import { ConfigProvider, Space, Table, Tag, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    shortLink: 'https://short.ly/abc123',
    originalLink: 'https://www.example.com',
    status: true,  // active
    date: '2024-07-29',
  },
  {
    key: '2',
    shortLink: 'https://short.ly/def456',
    originalLink: 'https://www.example.org',
    status: false, // inactive
    date: '2024-07-28',
  },
  {
    key: '3',
    shortLink: 'https://short.ly/ghi789',
    originalLink: 'https://www.example.net',
    status: true,  // active
    date: '2024-07-27',
  },
  {
    key: '4',
    shortLink: 'https://short.ly/jkl012',
    originalLink: 'https://www.example.co.uk',
    status: false, // inactive
    date: '2024-07-26',
  },
  {
    key: '5',
    shortLink: 'https://short.ly/mno345',
    originalLink: 'https://www.example.edu',
    status: true,  // active
    date: '2024-07-25',
  },
  {
    key: '6',
    shortLink: 'https://short.ly/pqr678',
    originalLink: 'https://www.example.gov',
    status: false, // inactive
    date: '2024-07-24',
  },
];

const TableData = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{ color: filtered ? '#1677ff' : undefined }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Short Link',
      dataIndex: 'shortLink',
      key: 'shortLink',
      ...getColumnSearchProps('shortLink'),
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: 'Original Link',
      dataIndex: 'originalLink',
      key: 'originalLink',
      ...getColumnSearchProps('originalLink'),
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <Tag style={{ backgroundColor: status ? '#87d068' : '#f5222d' }}>
          {status ? 'ACTIVE' : 'INACTIVE'}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(b.date) - new Date(a.date),
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      className="custom-table"
      rowHoverable={false}
    />
  );
};

export default TableData;
