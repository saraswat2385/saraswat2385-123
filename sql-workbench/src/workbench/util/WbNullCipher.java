/*
 * WbNullCipher.java
 *
 * This file is part of SQL Workbench/J, http://www.sql-workbench.net
 *
 * Copyright 2002-2011, Thomas Kellerer
 * No part of this code maybe reused without the permission of the author
 *
 * To contact the author please send an email to: support@sql-workbench.net
 *
 */
package workbench.util;

/**
 * @author  Thomas Kellerer
 */
public class WbNullCipher
	implements WbCipher
{

	@Override
	public String decryptString(String aValue)
	{
		return aValue;
	}

	@Override
	public String encryptString(String aValue)
	{
		return aValue;
	}
}